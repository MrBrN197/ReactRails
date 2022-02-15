class Message < ApplicationRecord
  validates :description, presence: true

  def self.random
    return 'no messages available' unless all.size.positive?

    all_messages = all
    rand_idx = rand(0...(all_messages.size))
    all_messages[rand_idx].description
  end
end
