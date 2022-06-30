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

                        <div class="hotel-box-bottom">
                            <p class="avaliable-rooms-text">
                                Quartos disponíveis
                            </p>

                            <div class="rooms">
                                <?php foreach($data->rooms as $room): ?>
                                    <div class="room">
                                        <div style="height: 100%; display: flex; flex-direction: column; justify-content: center">
                                            <p class="room-name">
                                                <?php echo $room->roomType->name; ?>
                                            </p>

                                            <div style="display: flex; align-items: center; gap: 8px">
                                                <?php if ($room->cancellationPolicies->refundable): ?>
                                                    <img 
                                                        src="res/icon/yes.svg" 
                                                        width="12px" 
                                                        height="12px"
                                                    >
                                                    <p class="yes">Cancelamento gratuito</p>
                                                <?php else: ?>
                                                    <img 
                                                        src="res/icon/no.svg" 
                                                        width="12px" 
                                                        height="12px"
                                                    >
                                                    <p class="no">Multa de cancelamento</p>
                                                <?php endif ?>
                                            </div>
                                        </div>

                                        <div style="display: flex; align-items: center;">
                                            <div style="display: flex; flex-direction: column; align-items: center;">
                                                <p class="price">
                                                    R$ <?php echo $room->price->amount ?> 
                                                    <span class="price-nights">/ noite</span>
                                                </p>

                                                <p class="payment-text">
                                                    Pagamento no hotel
                                                </p>
                                            </div>

                                            <button class="button">
                                                Reservar Agora
                                            </button>
                                        </div>
                                    </div>
                                <?php endforeach ?>
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

