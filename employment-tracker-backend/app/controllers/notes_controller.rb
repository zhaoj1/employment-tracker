class NotesController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        note = Note.new(noteParams)
        if note.save
            render json: note
        else
            render json: 'error'
        end
    end

    def index
        user = User.find(params[:user_id])
        notes = Note.select{|notes| notes.user_id === user.id}
        render json: notes
    end

    def show
        user = User.find(params[:user_id])
        note = Note.find(params[:id])
        render json: note
    end

    def update
        note = Note.find(params[:id])
        note.update(noteParams)
    end

    def destroy
        note = Note.find(params[:id])
        note.destroy
    end

    private

        def noteParams
            params.require(:note).permit(:contents, :page_type, :page_id, :user_id)
        end

end
