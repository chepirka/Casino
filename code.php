<?php
    $body = json_decode(file_get_contents('php://input'));
    $json = json_decode(file_get_contents("script.json"));
    $wholeBets = $json -> bets;
    $wholeBets[] = ["crown" => $body->crown, "heart" => $body->heart, "diamonds" => $body->diamonds, "spades" => $body->spades, "clubs" => $body->clubs, "anchor" => $body->anchor];
    $json -> bets = $wholeBets;
    $gain = $json -> win;
    $gain[] = ["first" => $body->first, "second"=>$body->second,"third"=>$body->third, "balance"=>$body->balance, "betValue"=>$body->betValue];
    $json -> win = $gain;
    file_put_contents('script.json',json_encode($json))
?>