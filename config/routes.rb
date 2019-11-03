Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'calculator#index'
  match 'calculator/new' => 'calculator#new', :via => [:get, :post]
end
