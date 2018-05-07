Rails.application.routes.draw do
  root 'static_pages#index'
  # namespace :api do
  #   namespace :v1 do
  #     resources :texts, only: [:create]
  #   end
  # end
  namespace :api, defaults: { format: :json } do
    resources :quotes, only: [ :show ]
  end
end
