class Api::NotesController < ApplicationController
    
    def index
        render :json => Note.all
    end

    def create
        note = Note.new(note_params)
        if note.save
            render :json => note
        else
            render :json => {message: note.errors}, status: 400
        end
    end

    def destroy
        @note = Note.find_by(id: params[:id])
        if @note.delete
            render :json => @note
        else
            render :json => {message: "Note Not Deleted"}
        end
    end

        private

        def note_params
            params.require(:note).permit(:subject, :content)
        end
    end