window.Noticeable = {
    user: {
        set: function (data) {
            if (window.sessionStorage) {
                if (!data || Object.keys(data).length === 0) {
                    window.sessionStorage.removeItem('noticeable:session');
                } else {
                    window.sessionStorage.setItem('noticeable:session', JSON.stringify(data));
                }
            }
        }
    }
};
