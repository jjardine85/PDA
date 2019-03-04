### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1 #Incorrect use of single equal symbol
      return true
    else
      return false
    end
  end

# 'dif' rather than 'def', dif won't define a function. No comma between arguments after function.
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name #'card' in this instance is not defined, return would have to be either of the arguments specified above
  else
    card2
  end
end
end # extra end is not required

def self.cards_total(cards) # self is not required and will return an error
  total # 'total' is created with no value. Total must be initialised as an integer to allow a count, normally 0.
  for card in cards
    total += card.value
    return "You have a total of" + total #return statement in this context will only provide the total of one card as the loop has not been allowed to complete it's cycle. Return would need to be outside of the for statement
  end
  # return statement should be here.
end


```
