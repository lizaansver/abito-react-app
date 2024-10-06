import axios from "axios"; //Эта строка импортирует библиотеку Axios, которая используется для выполнения HTTP-запросов.

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
//Это константы, которые представляют типы действий. Эти константы используются для идентификации действий в редукторах и других частях приложения.
//REGISTER_REQUEST: Указывает на начало процесса регистрации.
//REGISTER_SUCCESS: Указывает на успешное завершение процесса регистрации.
//REGISTER_FAILURE: Указывает на ошибку в процессе регистрации.


export const registerRequest = () => ({
    type: REGISTER_REQUEST
})
//Это функция registerRequest, которая возвращает объект действия.
//type: REGISTER_REQUEST: Указывает тип действия.
//Это действие не содержит payload, так как оно просто указывает на начало процесса регистрации.

export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user
})
//Это функция registerSuccess, которая возвращает объект действия.
//type: REGISTER_SUCCESS: Указывает тип действия.
//payload: user: Содержит данные о пользователе, которые будут использоваться для обновления состояния.

//ЕЩЕ РАЗ - payload ЭТО Объект или значение, которое содержит данные, необходимые для обновления состояния. Это могут быть данные пользователя, ошибки, результаты запросов и т.д.


export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error
})
//Эта строка определяет функцию registerFailure, которая возвращает объект действия.
//type: REGISTER_FAILURE: Указывает тип действия.
//payload: error: Содержит сообщение об ошибке, которое будет использоваться для обновления состояния.



export const registerUser = (userData) => { /** registerUser, которая возвращает асинхронную функцию. userData: Объект, содержащий данные пользователя(пароль логин), которые будут отправлены на сервер. */
    return async (dispatch) => { /** Эта строка возвращает асинхронную функцию, которая принимает dispatch в качестве аргумента. dispatch — это функция, которая используется для отправки действий в хранилище Redux. */
        dispatch(registerRequest()) //Эта строка отправляет действие registerRequest, указывая на начало процесса регистрации.

        try{//Этот блок кода выполняет HTTP-запрос на сервер для регистрации пользователя.
            const response = await axios.post('https://caeef3499daf20351e5f.free.beeceptor.com/api/users/', userData) //Выполняет POST-запрос на сервер с данными пользователя. await используется для ожидания выполнения промиса.
            dispatch(registerSuccess(response.data)) //dispatch(registerSuccess(response.data)): Если запрос успешен, отправляет действие registerSuccess с данными пользователя из ответа.
        }
        catch(error) {
            dispatch(registerFailure(error.message)) //Если запрос завершается с ошибкой, отправляет действие registerFailure с сообщением об ошибке.
        }
    }
} 


