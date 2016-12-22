var registerApp = angular.module('registerApp', []);

registerApp.controller('AppCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
        // $http
        //     .get('/users')
        //     .then(function (response) {
        //         console.log("I got the data I requested: \n");
        //         $scope.users = response;
        //     }, function (error) {
        //         console.log("Error while getting the response.\n" + error);
        //     });

        $http.defaults.transformResponse = []; // Impedir a serialização do JSON que resulta em erro

        $scope.submitForm = function () {
            console.log($scope.user);
            var postData = {},
                u = $scope.user,
                // import user as JSON
                user = {
                    email: {
                        address: ''
                    },
                    person: {
                        name: '',
                        lastName: '',
                        taxDocument: {
                            number: '',
                            type: 'CPF'
                        },
                        birthDate: '',
                        phone: {
                            countryCode: '',
                            areaCode: '',
                            number: ''
                        }
                    },
                    type: ''
                };
            if (u.acceptTerms) {
                user.email.address = u.email;
                user.person.name = u.name; // parse!
                user.person.lastName = u.name;
                user.person.taxDocument.number = u.cpf;
                user.person.phone.number = u.cellphone;
                //  handle area code
                console.log('user', user);

                $http({
                        method: 'POST',
                        url: 'https://private-anon-b26c3c7809-testemoip.apiary-mock.com/v2/accounts',
                        data: user,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                }).then(function successCallback(response) {
                    console.log('data: ', response.data);
                    console.log('status: ', response.status);
                    alert(`Conta de ${user.person.name} criada com sucesso!\nPor favor confirme seu e-mail!`);
                }, function errorCallback(response) {
                    console.error(response);
                });
            } else {
                alert('Marque a caixa de aceite de termos para prosseguir.');
            }
            // console.log('user is: ', user); $http.post('/users', $scope.user);
            // $http.post('/users', user);
        };
    }
]);