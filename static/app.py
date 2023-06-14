import qrcode

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)



qr.add_data('Name: Maharaf\n roll: 658843\n')
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="green")
img.save('qr.png')