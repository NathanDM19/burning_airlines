class User < ApplicationRecord
  has_secure_password
  validates :name, presence: true, uniqueness: true
  validates :password, presence: true, on: :create
  has_many :reservations
end

