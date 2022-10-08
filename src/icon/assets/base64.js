// https://developers.weixin.qq.com/community/develop/doc/000ca4532b8c207e4419f5c5c56c00
var Base64 = {
  // private property
  _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

  // public method for encoding
  encode: function (input) {
    var output = '';
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output =
        output +
        this._keyStr.charAt(enc1) +
        this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) +
        this._keyStr.charAt(enc4);
    } // Whend

    return output;
  }, // End Function encode

  // public method for decoding
  decode: function (input) {
    var output = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }

      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    } // Whend

    output = Base64._utf8_decode(output);

    return output;
  }, // End Function decode

  // private method for UTF-8 encoding
  _utf8_encode: function (string) {
    var utftext = '';
    string = string.replace(/\r\n/g, '\n');

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    } // Next n

    return utftext;
  }, // End Function _utf8_encode

  // private method for UTF-8 decoding
  _utf8_decode: function (utftext) {
    var string = '';
    var i = 0;
    var c, c1, c2, c3;
    c = c1 = c2 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(
          ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63),
        );
        i += 3;
      }
    } // Whend

    return string;
  }, // End Function _utf8_decode
};

const genBase64UrlFn = (viewBox, content) => {
  return (fill = 'currentColor') => {
    const str = `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg viewBox="${viewBox}" fill="${fill}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${content}</svg>`;
    return `data:image/svg+xml;base64,${Base64.encode(str)}`;
  };
};

export default {
  'icon-music-1': genBase64UrlFn('0 0 1024 1024', '<path d="M512 160a32 32 0 0 1 0 64 288 288 0 1 0 288 288 286.496 286.496 0 0 0-38.144-143.328 32 32 0 0 1 55.488-31.904A350.496 350.496 0 0 1 864 512c0 194.4-157.6 352-352 352S160 706.4 160 512 317.6 160 512 160z m160 0a96 96 0 0 1 96 96 32 32 0 0 1-63.776 3.744L704 256a32 32 0 0 0-63.776-3.744L640 256v256a128 128 0 1 1-63.968-110.848L576 256a96 96 0 0 1 96-96z m-160 288a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"  ></path>'),
  'icon-music-2': genBase64UrlFn('0 0 1024 1024', '<path d="M863.04 252.224l0.704 6.752 0.256 6.816V672a128 128 0 1 1-63.968-110.848L800 388.896l-384 54.848V736a128 128 0 0 1-121.6 127.84L288 864a128 128 0 1 1 64.032-238.848L352 311.52a96 96 0 0 1 76.8-94.08l5.632-0.96 320-45.728a96 96 0 0 1 108.608 81.472zM288 672a64 64 0 1 0 0 128 64 64 0 0 0 0-128z m448-64a64 64 0 1 0 0 128 64 64 0 0 0 0-128z m31.2-374.208l-3.712 0.32-320 45.728a32 32 0 0 0-27.296 28.032L416 311.52v67.584l384-54.848V265.792a32 32 0 0 0-32.8-32z"  ></path>'),
  'icon-mine': genBase64UrlFn('0 0 1024 1024', '<path d="M512 160a256 256 0 0 1 148.928 464.256C706.752 654.336 736 722.912 736 800a32 32 0 0 1-64 0c0-70.464-30.752-124.16-60.8-127.808L608 672h-192c-31.008 0-64 55.008-64 128a32 32 0 0 1-64 0c0-77.12 29.248-145.664 75.072-175.776A256 256 0 0 1 512 160z m0 64a192 192 0 1 0 0 384 192 192 0 0 0 0-384z m-64 128a32 32 0 0 1 32 32v32a32 32 0 0 1-64 0v-32a32 32 0 0 1 32-32z m128 0a32 32 0 0 1 32 32v32a32 32 0 0 1-64 0v-32a32 32 0 0 1 32-32z"  ></path>'),
};
