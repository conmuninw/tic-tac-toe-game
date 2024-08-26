    let gameStard = document.onload;
    let r_O = 'Round : X';
    let r_X = 'Round : O';
    let mark = document.getElementById('');
    let X = 'X';
    let O = 'O';
    let collecIdX = [];
    let collecIdO = [];
    let ply_X = 'Player : X'
    let ply_O = 'Player : O'
    let cardWin = document.getElementById('cardWin');
    cardWin.style.display = 'none';
    let textWin = document.getElementById('textWin');


    function playGame(event) {
    let player = document.getElementById('player');
    let myId = event.target;
    let elementId = myId.id;

        if (player.textContent === r_O) {
            let id_X = myId.id
            let contentX = document.getElementById(id_X);
            
            if (contentX.textContent === "") {

                contentX.textContent = X;
                collecIdX.push(elementId);

                player.textContent = r_X;
            } else {
                alert('กรุณาเลือกช่องใหม่');
                return;  
            }

            
        } else {
            let id_O = myId.id
            let contentO = document.getElementById(id_O);

            if (contentO.textContent === "") {

                contentO.textContent = O;
                collecIdO.push(elementId);

                player.textContent = r_O;
            } else {
                alert('กรุณาเลือกช่องใหม่');
                return;  
            }

        };

        checkWinner();

              // เช็ค Win แนวนอน 
        function checkWinner() {

            // เช็ค Win แนวนอน --------------------
            let row_first = ['1', '2', '3'];
            let row_second = ['4', '5', '6'];
            let row_third = ['7', '8', '9'];

                // player : X -------------------------------------------------------------------------------
                let CheckRow_winner_firstX = row_first.every(item => collecIdX.includes(item));
                    if (CheckRow_winner_firstX) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_X;
                    }
                
                let CheckRow_winner_secondX = row_second.every(item => collecIdX.includes(item));
                    if (CheckRow_winner_secondX) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_X;
                    }
                let CheckRow_winner_thirdX = row_third.every(item => collecIdX.includes(item));
                    if (CheckRow_winner_thirdX) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_X;
                    }

                // player : O --------------------------------------------------------------------------------
                let CheckRow_winner_firstO = row_first.every(item => collecIdO.includes(item));
                    if (CheckRow_winner_firstO) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_O;
                    }

                let CheckRow_winner_secondO = row_second.every(item => collecIdO.includes(item));
                    if (CheckRow_winner_secondO) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_O;
                    }

                let CheckRow_winner_thirdO = row_third.every(item => collecIdO.includes(item));
                    if (CheckRow_winner_thirdO) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_O;
                    }

            // เช็ค Win แนวตั้ง ----------------------
            let column_first = ['1', '4', '7'];
            let column_second = ['2', '5', '8'];
            let column_third = ['3', '6', '9'];

            // player : X -------------------------------------------------------------------------------
                let Checkcolumn_winner_firstX = column_first.every(item => collecIdX.includes(item));
                    if (Checkcolumn_winner_firstX) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_X;
                    }
                
                let Checkcolumn_winner_secondX = column_second.every(item => collecIdX.includes(item));
                    if (Checkcolumn_winner_secondX) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_X;
                    }
                let Checkcolumn_winner_thirdX = column_third.every(item => collecIdX.includes(item));
                    if (Checkcolumn_winner_thirdX) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_X;
                    }

                // player : O --------------------------------------------------------------------------------
                let Checkcolumn_winner_firstO = column_first.every(item => collecIdO.includes(item));
                    if (Checkcolumn_winner_firstO) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_O;
                    }

                let Checkcolumn_winner_secondO = column_second.every(item => collecIdO.includes(item));
                    if (Checkcolumn_winner_secondO) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_O;
                    }

                let Checkcolumn_winner_thirdO = column_third.every(item => collecIdO.includes(item));
                    if (Checkcolumn_winner_thirdO) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_O;
                    }


            // เช็ค Win แนวทแยง ----------------------
            let diagonal_first = ['1', '5', '9'];
            let diagonal_second = ['3', '5', '7'];

            // player : X -------------------------------------------------------------------------------
                let Checkdiagonal_winner_firstX = diagonal_first.every(item => collecIdX.includes(item));
                    if (Checkdiagonal_winner_firstX) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_X;
                    }
                
                let Checkdiagonal_winner_secondX = diagonal_second.every(item => collecIdX.includes(item));
                    if (Checkdiagonal_winner_secondX) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_X;
                    }

                // player : O --------------------------------------------------------------------------------
                let Checkdiagonal_winner_firstO = diagonal_first.every(item => collecIdO.includes(item));
                    if (Checkdiagonal_winner_firstO) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_O;
                    }

                let Checkdiagonal_winner_secondO = diagonal_second.every(item => collecIdO.includes(item));
                    if (Checkdiagonal_winner_secondO) {
                        cardWin.style.display = '';
                        textWin.textContent = ply_O;
                    }

        };  
    };



    function Start() {
        return location.reload(true);
    };

    function reStart() {
        cardWin.style.display = 'none';
        return location.reload(true);
    };

    
    
    






    






