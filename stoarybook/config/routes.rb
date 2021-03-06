Stoarybook::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  #root 'devise/sessions#new'


  #resources :bulk_photos
  get 'bulk_photos' => 'bulk_photos#index', :as => :bulk_photos
  post 'bulk_photos' => 'bulk_photos#create'
  get 'bulk_photos/:id' => 'bulk_photos#show', :as => :bulk_photo

  resources :book_photos

  resources 'books' do
    resources 'pages'
    get 'browse' => 'books#browse', as: :browse, on: :collection
  end

  devise_for :users

  resources 'users' do
    resources 'books'
  end

  root 'about#index'
  #root 'devise/sessions#new'
  #devise_scope :user do
  #  get "/" => "devise/sessions/new"
  #end

  #root :action => 'new', :controller => 'devise/sessions'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
