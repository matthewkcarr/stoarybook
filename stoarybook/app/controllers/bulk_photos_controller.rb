class BulkPhotosController < ApplicationController
  def index
    @photos = BookPhoto.all
    @book_photo = BookPhoto.new
  end

  def new 
    @book_photo = BookPhoto.new
  end

  def create
    @book_photo = BookPhoto.new( params.require(:book_photo).permit(:picture) )
    if @book_photo.save
      redirect_to :action => :index
    else
      render 'new'
    end
  end
end
