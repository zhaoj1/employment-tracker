class User < ApplicationRecord

    validates :username, uniqueness: true, presence: true
    # validates :password, presence: true, length: { in: 6..20 }

    has_secure_password

end
