Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users do
      resources :cards do
        resources :card_categories
      end
      resources :merchants
    end
    resources :cards do
      resources :card_categories
    end
    resources :merchants
  end

end
