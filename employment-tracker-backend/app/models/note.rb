class Note < ApplicationRecord

    belongs_to :algo
    belongs_to :job
    belongs_to :interview
    belongs_to :meetup
    
end
