function chooseLevelScreen() {
	const NewMenu = `
  	<div class="container start">
    <div class="row align-items-center start_game">
        <div class="col text-center">
            <button type="button" class="btn btn-success btn-lg" onclick="newGame()">СТАРТ!</button>
        </div>
    </div>
</div>
`
	$(".screen").html(NewMenu);
}

chooseLevelScreen();
