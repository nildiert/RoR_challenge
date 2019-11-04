class Calculator < ApplicationRecord
    
    def self.sum(a, b)
        a.to_i + b.to_i
    end

    def self.subtr(a, b)
        a.to_i - b.to_i
    end

    def self.mult(a, b)
        a.to_i * b.to_i
    end

    def self.div(a, b)
        a.to_i / b.to_i
    end

    def self.operations(value)
        case value
        when '+'
            operation = :sum
        when '-'
            operation = :subtr
        when '*'
            operation = :mult
        when '/'
            operation = :div
        else
            "Error: Invalid value"
        end
        operation
    end


    # def self.object(str, answer)
    #     if Calculator.where(:text_operation => str).blank?
    #         @calc = Calculator.new(text_operation: string_value, result: answer)
    #     else
    #         @calc = Calculator.find_by(text_operation: string_value)
    #         @calc.update(count: @calc.count + 1)
    #         @calc.save
    #     end
    #     return @calc
    # end


    # private 


end
