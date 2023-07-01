class Api::V1::EmployeesController < ApplicationController


  def index
    employees = Employee.all
    render json: EmployeeSerializer.new(employees, options).serialized_json
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

  def destroy
    @employee = Employee.find(params[:id])
    @employee.destroy
    head :no_content
  end


  private

  def employee_params
    params.require(:employee).permit(:first_name, :last_name, :address, :date_of_birth, :attachment,  references_attributes:[:first_name, :last_name])
  end

  def options
    @options ||= { include: %i[references]}
  end
end
