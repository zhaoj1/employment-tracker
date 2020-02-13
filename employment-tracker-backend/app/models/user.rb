class User < ApplicationRecord

    has_many :algos
    has_many :jobs
    has_many :interviews
    has_many :meetups
    has_many :notes, through: :algos
    has_many :notes, through: :jobs
    has_many :notes, through: :interviews
    has_many :notes, through: :meetups

    validates :username, uniqueness: true, presence: true
    # validates :password, presence: true, length: { in: 6..20 }

    has_secure_password

end
