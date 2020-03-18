Rails.application.routes.draw do
  namespace :api do
    resources :players, except: [:edit, :show, :update]
    resources :notes, except: [:edit, :show, :update]
  end
end
