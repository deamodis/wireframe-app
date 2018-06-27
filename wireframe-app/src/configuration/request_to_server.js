    const xhr = new XMLHttpRequest();
    let clients;

    function loadJSON(callback) {

        xhr.open('GET', 'http://127.0.0.1:8081/clients.json', true);
        xhr.send();

        return xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;

            if (xhr.status != 200) {
                // обработать ошибку
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                try {
                   callback(xhr.responseText);
                   } catch (e) {
                    alert("Некорректный ответ " + e.message);
                }
            }
        };
    }

    export default function init(store) {
        loadJSON( function(response) {
            clients = JSON.parse(response);
            store.dispatch( {type: "INITIAL_STATE_AFTER_CONNECTING", payload: clients} )
        });
    }

