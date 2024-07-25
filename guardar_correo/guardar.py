from flask import Flask, request, render_template, jsonify
import json
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('formularios.html')

@app.route('/guardar-correo/', methods=['POST'])
def guardar_correo():
    email = request.form.get('email')
    print(f"Email recibido: {email}")  # Mensaje de depuración

    if email:
        file_path = 'guardar_correo/emails.json'
        
        # Leer los correos existentes
        if os.path.exists(file_path):
            with open(file_path, 'r') as file:
                try:
                    emails = json.load(file)
                    print(f"Correos existentes: {emails}")  # Mensaje de depuración
                except json.JSONDecodeError:
                    emails = []
        else:
            emails = []

        # Agregar el nuevo correo
        emails.append({'email': email})
        print(f"Correos después de agregar: {emails}")  # Mensaje de depuración

        # Guardar los correos actualizados en el archivo JSON
        with open(file_path, 'w') as file:
            json.dump(emails, file, indent=2)
        
        print("Correo guardado con éxito")  # Mensaje de depuración
        return jsonify({'message': 'Correo electrónico guardado con éxito'})
    else:
        print("No se recibió ningún correo electrónico")  # Mensaje de depuración
        return jsonify({'message': 'No se recibió ningún correo electrónico'}), 400

    email = request.form.get('email')
    print(f"Email recibido: {email}")  # Mensaje de depuración

    if email:
        file_path = 'emails.json'
        
        # Leer los correos existentes
        if os.path.exists(file_path):
            with open(file_path, 'r') as file:
                try:
                    emails = json.load(file)
                except json.JSONDecodeError:
                    emails = []
        else:
            emails = []

        # Agregar el nuevo correo
        emails.append({'email': email})

        # Guardar los correos actualizados en el archivo JSON
        with open(file_path, 'w') as file:
            json.dump(emails, file, indent=2)
        
        print("Correo guardado con éxito")  # Mensaje de depuración
        return jsonify({'message': 'Correo electrónico guardado con éxito'})
    else:
        print("No se recibió ningún correo electrónico")  # Mensaje de depuración
        return jsonify({'message': 'No se recibió ningún correo electrónico'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9000, debug=True)