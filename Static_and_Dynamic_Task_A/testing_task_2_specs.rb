require("minitest/autorun")
require("minitest/rg")
require_relative("./testing_task_2.rb")

class TestCardGame < MiniTest::Test

  def setup
    @game = CardGame.new

    @card1 = Card.new('Spades', 7)
    @card2 = Card.new('Hearts', 3)
    @card3 = Card.new('Diamonds', 1)
  end

  def test_check_for_ace_false
    assert_equal(false, @game.checkforAce(@card1))
  end

  def test_check_for_ace_true
    assert_equal(true, @game.checkforAce(@card3))
  end

  def test_returns_highest_card
    assert_equal(@card1, @game.highest_card(@card1, @card2))
  end

  def test_still_returns_highest_card_when_card_order_changed
    assert_equal(@card1, @game.highest_card(@card2, @card1))
  end

  def test_total_card_count
    assert_equal('You have a total of 11', @game.cards_total([@card1, @card2, @card3]))
  end


end
