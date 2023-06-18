
class EmployeesController < ApplicationController


  def index
    @employees = Employee.all
    render json: @employees
  end

  def new
    @employee = Employee.new
  end

  def show
    if @employee
      render json: @employee
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


  private

  def employee_params
    params.require(:employee).permit(:first_name, :last_name, :address, :date_of_birth)
  end
end
