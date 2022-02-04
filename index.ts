import { OBJ } from 'webgl-obj-loader';

const input = document.getElementById('in') as HTMLInputElement;
input.onchange = () => {
	const file = input.files[0];
	if (!file) return;
	const fr = new FileReader();
	fr.onload = (e) => {
		const contents = e.target.result as string;
		if (!contents) return;

		const mesh = new OBJ.Mesh(contents);

		verts.textContent = String(mesh.vertices);
		norms.textContent = String(mesh.vertexNormals);
		indices.textContent = String(mesh.indices);
	}
	fr.readAsText(file);
};

const verts = document.getElementById('vertices');
const norms = document.getElementById('normals');
const indices = document.getElementById('indices');
