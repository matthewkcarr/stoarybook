class BooksController < ApplicationController

  before_action :authenticate_user!, :only => [:new, :create, :update, :edit, :destroy]
  before_filter :find_author, :except => [:new]

  def index
    @books = @author.books
  end

  def show
    @book = Book.find(params[:id], :include => :pages)
    @pages = @book.pages
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params.merge(:author => current_user))
    current_user_is_author?
    if @book.save
      redirect_to :index
    else
      render :new
    end
  end

  def edit
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])
    current_user_is_author?
    if @book.update( book_params )
      redirect_to user_book_path(@user, @book)
    else
      render :edit
    end
  end

  def destroy
    @book = Book.find(params[:id])
    current_user_is_author?
    @book.destroy
    redirect_to user_books_path(@user)
  end

  private

  def current_user_is_author?
    redirect to '/about' and return unless current_user == @book.author
  end

  def find_author
    @author = User.find(params[:user_id])
  end

  def book_params
    params.require(:book).permit(:title)
  end
end
