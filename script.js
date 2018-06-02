$(document).ready(function() {

    var phrases = [
        'Heya !',
        'I am a 3rd year student at IITK,',
        'Please scroll down to know more...',
        
    ];
    var len = phrases.length;
    var index = 0;

    var ctrl = bubbleText({
        element: $('#bubble'),
        newText: phrases[index++],
        letterSpeed: 70,
        repeat: Infinity,
        timeBetweenRepeat: 1000,
        callback: function() {
            this.newText = phrases[index++ % len];
        },
    });
});
