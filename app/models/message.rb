class Message < ApplicationRecord
  validates :description, presence: true
end
