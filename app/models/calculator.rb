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

end