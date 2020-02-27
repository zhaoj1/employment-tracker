class User < ApplicationRecord

    has_many :algorithms
    has_many :jobs
    has_many :interviews
    has_many :meetups
    has_many :notes

    validates :username, uniqueness: true, presence: true
    validates :password, presence: true, length: { in: 6..20 }

    has_secure_password

end
