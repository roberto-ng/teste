<?php 
    $uri = $_SERVER['REQUEST_URI'];
?>

<div class="search-bar">
    <div class="sections">
        <div class="section destination">
            <div class="section-title">
                <img src="res/icon/icon.svg" class="icon">
                <p style="height: 24px;">Destino</p>
            </div>
                
            <input 
                type="text"
                class="section-data destino" 
                value=""
            />

            <div class="suggestion-dropdown">
                <div class="arrow-up"></div>
                <div class="suggestion-box"></div>
            </div>
        </div>
        
        
        <div class="section">
            <div class="section-title">
                <img src="res/icon//calendar.svg" class="icon">
                <p style="height: 24px;">Entrada</p>
            </div>
                
            <p class="section-data" style="height: 26px;">
                22/10/2022
            </p>
        </div>
    
    
        <div class="section">
            <div class="section-title">
                <img src="res/icon/calendar.svg" class="icon">
                <p style="height: 24px;">Saída</p>
            </div>
                
            <p class="section-data" style="height: 26px;">
                22/10/2022
            </p>
        </div>
            
        <div class="section">
            <div class="section-title">
                <img src="res/icon/guests.svg" class="icon">
                <p style="height: 24px;">Hóspedes</p>
            </div>
                
            <p class="section-data" style="height: 26px;">
                2 Adulto(s), 0 Criança(s)
            </p>
        </div>    

    </div>

    <button class="btn-search">
        Pesquisar
    </button>
</div>

<script type="module" src="res/js/searchbar.js"></script>