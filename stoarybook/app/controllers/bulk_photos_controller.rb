class BulkPhotosController < ApplicationController
  def index
    @photos = BookPhoto.all
    @book_photo = BookPhoto.new
  end

  def new 
    @book_photo = BookPhoto.new
  end

  def create
    @book_photo = BookPhoto.create( photo_params )
    if @book_photo 
      respond_to do |format|
        format.html {
          redirect_to :action => :index
        }
        #format.json { render :json => {:message => 'File uploaded sucessfully'}, :status => :success }
        format.json { render json: {files: [to_jq_upload(@book_photo)]}, status: :created, location: @book_photo }
      end
    else
      respond_to do |format|
        format.html {
          render :template => :new
        }
        #format.json { render :json => {}, :status => :unprocessable_entity}
        format.json { render json: @book_photo.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def photo_params
    #params[:book_photo][:picture] ||= []
    params.require(:book_photo).permit(:picture, :picture => [])
  end

  def to_jq_upload(book_photo)
    return {
      "name" => book_photo.picture_file_name,
      "size" => book_photo.picture_file_size,
      "url" => book_photo.picture.url(:original),
      "delete_url" => book_photo_path(book_photo),
      "delete_type" => "DELETE"
    }
  end

end
