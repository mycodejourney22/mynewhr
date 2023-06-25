class EmployeesController < ApplicationController
  # protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  def index
    @employees = Employee.all
    render json: @employees
  end

  def new
    @employee = Employee.new
    @employee.references.build
    @employee.build_compensation
  end

  def show
    @employee = Employee.find(params[:id])
    if @employee
      myhash = {'employee' => @employee, 'references' => @employee.references}
      render json: myhash
    else
      render json: @employee.errors
    end
  end

  def create
    @employee = Employee.new(employee_params)
    if @employee.save
      render json: @employee
    else
      render json: @employee.errors
    end
  end

  def edit
    @employee = Employee.find(params[:id])
  end


  private

  def employee_params
    params.require(:employee).permit(:first_name, :last_name, :address, :date_of_birth, references_attributes:[:first_name, :last_name])
  end
end
