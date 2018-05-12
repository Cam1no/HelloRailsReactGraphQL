class User < ApplicationRecord
  VALID_EMAIL_REGEXP = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  enum gender: { male: 0, female: 1 }

  validates :first_name, :last_name, :email, :gender, presence: true
  validates :email, format: { with: VALID_EMAIL_REGEXP }
  validates :gender, inclusion: { in: genders.keys }

  def name
    [first_name, last_name].join(' ')
  end
end
