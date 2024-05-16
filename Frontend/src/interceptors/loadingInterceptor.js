import axios from 'axios';


export const setLoadingInterceptor = ({ showLoading, hideLoading }) => {
    axios.interceptors.request.use(
        req => {
            // Sólo muestra loading si la propiedad `showLoadingForRequest` es verdadera o no está definida
            if (req.showLoadingForRequest !== false) {
                showLoading();
            }
            return req;
        },
        error => {
            hideLoading();
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        res => {
            // Sólo oculta loading si la propiedad `showLoadingForRequest` es verdadera o no está definida
            if (res.config.showLoadingForRequest !== false) {
                hideLoading();
            }
            return res;
        },
        error => {
            // Asegúrate de pasar la configuración original a la respuesta de error
            if (error.config.showLoadingForRequest !== false) {
                hideLoading();
            }
            return Promise.reject(error);
        }
    );
};

export default setLoadingInterceptor;
