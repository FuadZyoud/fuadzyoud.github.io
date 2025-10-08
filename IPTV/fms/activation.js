async function activateCode(code) {
    try {
        let response = await fetch(`https://fmods.ct.ws/activation/activate.php?code=${code}`);
        let data = await response.json();
        console.log(data);

        if (data.success) {
            alert(data.message + "\nLicensed to: " + data.licensed_to);
        } else {
            alert("Activation failed: " + data.message);
        }
    } catch (err) {
        console.error(err);
        alert("Error connecting to activation server.");
    }
}

// Example call:
activateCode("FMS-AAAA-1111");
