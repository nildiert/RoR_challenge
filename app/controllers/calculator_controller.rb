class CalculatorController < ApplicationController

    def index
    end

    def new
        
        operation = Calculator.send(:operations, params[:commit])
        values = permited_values
        string_value = values[:full]
        answer = Calculator.send(operation, *[values[:value_a], values[:value_b]])

        if Calculator.where(:operation => string_value).blank?
            @calc = Calculator.new(operation: string_value, result: answer)
        else
            @calc = Calculator.find_by(operation: string_value)
            @calc.update(count: @calc.count + 1)
        end
        @calc.save

        
        puts "="*50
        puts "Te amo Dreisfield"
        p @calc
        # render :index
        # byebug
    end

    private 


    def permited_values
        permitted = params.require(:calculator).permit(:a, :b)
        {full: "#{permitted[:a]} #{params[:commit]} #{permitted[:b]}", value_a: permitted[:a], value_b: permitted[:b]} 
    end

    def create_params
        params.require(:calculator).permit(:a, :b, :result)
    end

end
