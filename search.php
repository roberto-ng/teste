<!DOCTYPE html>
<html>
    <head>
        <?php
            include "./template/headContent.php";
        ?>

        <link rel="stylesheet" href="res/css/searchPage.css">
    </head>

    <body>
        <?php
            include "./template/header.php";
        ?>

        <div class="wrapper">
            <div class="search-page">
                <?php
                    include "./template/searchbar.php";
                ?>
    
                <div class="result-infobox">
                    <p class="location-name text-color">
                        <span class="bold-text">São Paulo,</span> 
                        Brasil
                    </p>
    
                    <!-- Mostrar quantidade de hotéis encontrados -->
                    <p class="location-caption caption-color"></p>
                </div>
    
                <div class="hotel-cards"></div>
            
            </div>
        </div>
        
            <?php
                include "./template/footer.php";
            ?>

        <script type="module" src="res/js/searchPage.js"></script>
    </body>
</html>