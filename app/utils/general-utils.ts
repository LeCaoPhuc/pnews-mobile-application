import * as connectivity from "connectivity";
import * as Toast from "nativescript-toast";
import * as application from "application"
export function checkInternetConnection() {
    let connectionType = connectivity.getConnectionType();
    if (connectionType === connectivity.connectionType.none) {
        return false;
    }
    return true;
}

export function showToast(message: string, longTime?: boolean) {
    if(longTime) {
        Toast.makeText(message, Toast.duration.long[0])
    }
    else {
        Toast.makeText(message).show();
    }
}
