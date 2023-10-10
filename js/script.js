$(document).ready(function() {
    $('#konversi-btn').click(function() {
        const celciusValue = $('#celcius').val();
        const celsius = Number(celciusValue);
        const fahrenheit = (celsius * 9) / 5 + 32;
        $('#fahrenheit').val(fahrenheit);
        $('#kalkulasi').val(`${celsius}°C x 9/5 + 32 = ${fahrenheit}°F`);
    });

    $('#reset-btn').click(function() {
        $("#celcius").val('');
        $("#fahrenheit").val('');
        $("#kalkulasi").val('');
    });

    $('#reverse-btn').click(function() {
        const fahrenheitValue = $('#fahrenheit').val();
        const celsiusValue = $('#celcius').val();

        // Mengecek kondisi saat tombol Reverse ditekan
        if (celsiusValue) {
            // Jika input Celsius tidak kosong, ubah teks label ke Fahrenheit
            $("#celcius-label").text("Masukkan suhu derajat Fahrenheit (℉):");
            $("#fahrenheit-label").text("Celcius (℃):");
            $("#cara-kalkulasi-label").text("Cara Kalkulasi (Fahrenheit ke Celcius):");
            $("#konversi-teks").text("Celsius ke Fahrenheit");
        } else {
            // Jika input Fahrenheit tidak kosong, ubah teks label ke Celsius
            $("#celcius-label").text("Masukkan suhu derajat Celcius (℃):");
            $("#fahrenheit-label").text("Fahrenheit (℉):");
            $("#cara-kalkulasi-label").text("Cara Kalkulasi (Celsius ke Fahrenheit):");
            $("#konversi-teks").text("Fahrenheit ke Celsius");
        }

        const fahrenheit = Number(fahrenheitValue);
        const celsius = ((fahrenheit - 32) * 5) / 9;
        $('#celcius').val(celsius);
        $('#kalkulasi').val(`${fahrenheit}°F - 32 x 5/9 = ${celsius}°C`);
    });
});
