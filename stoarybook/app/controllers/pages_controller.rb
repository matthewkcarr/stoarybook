class PagesController < ApplicationController

  before_filter :find_book

  def index
    @pages = @book.pages
  end

  def show
    @page = @book.pages.where(:id => params[:id])
  end

  def new
    @page = Page.new(:book => @book )
  end

  def create
    @page = Page.new(page_params.merge(:book => @book))
    current_user_is_author?
    if @page.save
      redirect_to book_page_path(@book, @page)
    else
      render :new
    end
  end

  def edit
    @page = Page.find(params[:id])
  end

  def update
    @page = Page.find(params[:id])
    current_user_is_author?
    if @page.update( page_params )
      redirect_to book_page_path(@book, @page)
    else
      render :edit
    end
  end

  def destroy
    @book = Book.find(params[:id])
    current_user_is_author?
    @book.destroy
    redirect_to :index
  end

  private

  def current_user_is_author?
    redirect_to '/about' and return unless current_user == @book.author
  end

  def find_book
    @book = Book.find(params[:book_id])
  end

  def page_params
    params.require(:page).permit(:text)
  end
end
