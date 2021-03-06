describe('tic-tac-toe', function(){
	beforeEach(function(){
		game = new Game
	});

	it("always starts with an empty grid", function(){
		expect(game.Grid).not.toContain('X');
		expect(game.Grid).not.toContain('O');
	});

	it("lets the player place a O on the grid", function(){
		game.placeNought(1);
		expect(game.Grid[1]).toEqual('O');
	});

	it("lets the computer place an X on the grid", function(){
		game.placeCross(1);
		expect(game.Grid[1]).toEqual('X');
	});

	it("won't let the player place a O on a square already in use", function(){
		game.placeCross(1);
		game.placeNought(1);
		expect(game.Grid[1]).toEqual('X')
	})

	it("creates an array of empty squares", function(){
		game.placeCross(1);
		game.getEmptySquares();
		expect(game.emptySquares).not.toContain(1);
		expect(game.emptySquares).toContain(5);
	})

	it("generates a random unused square in the grid for the computer to place a piece on", function(){
		game.generateMove();
		expect(game.Grid).toContain('X');
	})

	it("knows when the game has been won horizontally", function(){
		game.placeNought(3);
		game.placeNought(4);
		game.placeNought(5);
		game.checkForWinners();
		expect(game.Winner).toEqual("Player");
	})

	it("knows when the game has been won vertically", function(){
		game.placeCross(1);
		game.placeCross(4);
		game.placeCross(7);
		game.checkForWinners();
		expect(game.Winner).toEqual("Computer");
	})

	it("knows when the game has been won diagonally", function(){
		game.placeCross(0);
		game.placeCross(4);
		game.placeCross(8);
		game.checkForWinners();
		expect(game.Winner).toEqual("Computer");
	})

	it("when the board is full and there are no winners, knows its a draw", function(){
		game.placeCross(0);
		game.placeCross(2);
		game.placeCross(3);
		game.placeCross(5);
		game.placeCross(7);
		game.placeNought(1);
		game.placeNought(4);
		game.placeNought(6);
		game.placeNought(8);
		game.checkForWinners();
		expect(game.Winner).toEqual("Draw");
	})

});