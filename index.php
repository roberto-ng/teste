<!DOCTYPE html>
<html>
    <head>
        <?php
            include "./template/headContent.php";
        ?>
    </head>

    <body>
        <div class="wrapper">
            <header class="header">
                <a href="index" class="logo">
                    infotravel
                </a>
    
                <div class="buttons">
                    <a class="button" href="index">
                        <img src="res/icon/exit.svg">
                        <p>Iniciar Sessão</p>
                    </a>
                </div>
            </header>
    
            <main>
                <div class="home-page">
                    <h1 class="heading-text">
                        <span class="text-color">Os melhores</span> 
                        <span class="text-primary-color">Hoteis</span>
                        <span class="text-color">e</span>
                        <span class="text-primary-color">Destinos</span><br/> 
                        <span>para sua viagem</span>
                    </h1>
                    
                    <?php
                        include "./template/searchbar.php";
                    ?>
                </div>
            </main>

            <?php
                include "./template/footer.php";
            ?>
        </div>
    </body>
</html>