class Api::V1::ReferencesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @references = Reference.all
    render json: @references
  end

  def create
    @reference = Reference.new(reference_params)
    if @reference.save
      render json: @reference
    else
      render json: @reference.errors
    end
  end

  private

  def reference_params
    params.require(:reference).permit(:first_name, :last_name, :employee_id, :email_address, :relationship,
                  :contact_number)
  end

end
