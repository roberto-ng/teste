<!DOCTYPE html>
<html>
    <head>
        <?php
            include "./template/headContent.php";
        ?>

        <link rel="stylesheet" href="res/css/searchPage.css">
    </head>

    <body>
        <div class="search-page">
            <?php
                include "./template/searchbar.php";
            ?>

            <div class="result-infobox">
                <p class="location-name text-color">
                    <span class="bold-text">São Paulo,</span> 
                    Brasil
                </p>

                <p class="location-caption caption-color">
                    102 hoteis encontrados
                </p>
            </div>
        </div>

        <script type="module" src="res/js/searchPage.js"></script>
    </body>
</html: