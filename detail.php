<?php
    parse_str($_SERVER['QUERY_STRING'], $params);
    $id = $params['id'];

    // buscar hotel na API
    $data = null;
    $hotel_api = 'http://0.0.0.0:3333/hotels';
    $response = file_get_contents($hotel_api."/".$id);
    $data = json_decode($response); 
?>

<!DOCTYPE html>
<html>
    <head>
        <?php
            include "./template/headContent.php";
        ?>

        <link rel="stylesheet" href="res/css/detailPage.css">
    </head>

    <body>
        <?php
            include "./template/header.php";
        ?>

        <div class="wrapper">
            <div class="detail-page">
                <?php
                    include "./template/searchbar.php";
                ?>
                
                <!-- Checar se o hotel foi encontrado -->
                <?php if (is_null($data)): ?>
                    <p class="err-msg">Nenhum hotel encontrado</p>
                <?php else: ?>
                    <div class="hotel-box">
                        <div class="hotel-box-top">
                            <img src="<?php echo $data->hotel->image ?>" class="image">

                            <div class="hotel-box-top-right">
                                <p class="hotel-name">
                                    <?php echo $data->hotel->name; ?>
                                </p>

                                <div class="hotel-address">
                                    <img src="res/icon/location2.svg" width="12.2px" height="13px">
                                    <p>
                                        <?php echo $data->hotel->address; ?>
                                    </p>
                                </div>

                                <div class="stars">
                                    <?php
                                        for ($i = 0; $i < $data->hotel->stars; $i++) {
                                            echo "<img src=\"res/icon/star.svg\" width=\"14px\" height=\"12px\">";
                                        }
                                    ?>
                                </div>

                                <p class="hotel-description">
                                    <?php echo $data->hotel->description ?>
                                </p>
                            </div>
                        </div>
                    </div>
                <?php endif ?>
            </div>

            <?php
                include "./template/footer.php";
            ?>
        </div>
    </body>
</html>

