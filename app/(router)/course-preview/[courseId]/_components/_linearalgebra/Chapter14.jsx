import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function ChapterFourteen() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">Chapter 14: Eigenvectors and <span className=" ">Eigenvalues</span></h2>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">What Are Eigenvectors and Eigenvalues?</h3>
        <p className="mb-4">
          Eigenvectors and eigenvalues are fundamental concepts in linear algebra, often used to simplify the understanding of linear transformations. Here's a step-by-step explanation to make them intuitive:
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">1. <span className=" ">Linear Transformations and Matrices</span></h3>
        <p className="mb-4">
          Think of a matrix as a <em>machine</em> that transforms vectors. For example, in 2D, applying a matrix to a vector could stretch, rotate, or squish it.
        </p>
        <ul className="mb-4 list-disc list-inside ml-4">
          <li>Each matrix represents a specific linear transformation.</li>
          <li>The transformation acts on vectors, changing their direction, length, or both.</li>
        </ul>
        <p className="mb-4">Example: Let’s consider the transformation represented by the matrix:</p>
        <BlockMath math="A = \begin{bmatrix} 3 & 0 \\ 1 & 2 \end{bmatrix}" />
        <p className="mb-4">This matrix changes the basis vectors <strong>i-hat</strong> (1, 0) and <strong>j-hat</strong> (0, 1):</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>i-hat</strong> is transformed into (3, 0).</li>
          <li><strong>j-hat</strong> becomes (1, 2).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">2. <span className=" ">Special Vectors: Eigenvectors</span></h3>
        <p className="mb-4">
          Most vectors, when transformed by a matrix, will change direction. However, <strong>eigenvectors</strong> are special because:
        </p>
        <ul className="mb-4 list-disc list-inside ml-4">
          <li>They do not change direction.</li>
          <li>They either get stretched, squished, or flipped but remain on the same line (span).</li>
        </ul>
        <p className="mb-4">Example: For the matrix A:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>The vector (1, 0), which lies on the x-axis, gets stretched by a factor of 3.</li>
          <li>Another vector, (−1, 1), gets stretched by a factor of 2.</li>
        </ul>
        <p className="mb-4">These are eigenvectors because they stay on their span, only scaled.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">3. <span className=" ">The Scaling Factor: Eigenvalues</span></h3>
        <p className="mb-4">
          Each eigenvector has an associated <strong>eigenvalue</strong>, which represents how much the eigenvector is stretched, squished, or flipped during the transformation.
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>If an eigenvector <InlineMath math="\mathbf{v}" inline /> is stretched by a factor of <InlineMath math="\lambda" inline />, the eigenvalue is <InlineMath math="\lambda" inline />.</li>
        </ul>
        <p className="mb-4">Mathematically, this is written as:</p>
        <InlineMath math="A \cdot \mathbf{v} = \lambda \cdot \mathbf{v}" />
        <p className="mt-4 mb-4">Here:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><InlineMath math="A" inline /> is the transformation matrix.</li>
          <li><InlineMath math="\mathbf{v}" inline /> is an eigenvector.</li>
          <li><InlineMath math="\lambda" inline /> is the eigenvalue.</li>
        </ul>
        <p className="mb-4">Example: For the matrix:</p>
        <InlineMath math="A = \begin{bmatrix} 3 & 0 \\ 1 & 2 \end{bmatrix}" />
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>The eigenvector (1, 0) has eigenvalue <InlineMath math="\lambda = 3" inline />.</li>
          <li>The eigenvector (−1, 1) has eigenvalue <InlineMath math="\lambda = 2" inline />.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">4. <span className=" ">Finding Eigenvectors and Eigenvalues</span></h3>
        <p className="mb-4">To find eigenvectors and eigenvalues:</p>
        <ol className="list-decimal list-inside ml-4 mb-4">
          <li><strong>Start with the equation:</strong> <InlineMath math="A \cdot \mathbf{v} = \lambda \cdot \mathbf{v}" /></li>
          <li><strong>Rearrange to:</strong> <InlineMath math="(A - \lambda I) \cdot \mathbf{v} = 0" />, where <InlineMath math="I" inline /> is the identity matrix.</li>
          <li><strong>Solve for <InlineMath math="\lambda" inline />:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Find the determinant of <InlineMath math="(A - \lambda I)" inline />.</li>
              <li>Set it to zero: <InlineMath math="\text{det}(A - \lambda I) = 0" inline />.</li>
              <li>This gives a polynomial equation in <InlineMath math="\lambda" inline />.</li>
            </ul>
          </li>
          <li><strong>Solve for eigenvectors:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Substitute each eigenvalue <InlineMath math="\lambda" inline /> back into <InlineMath math="(A - \lambda I)" inline />.</li>
              <li>Solve the resulting system for <InlineMath math="\mathbf{v}" inline />.</li>
            </ul>
          </li>
        </ol>
        <p className="mb-4">Example: For <InlineMath math="A = \begin{bmatrix} 3 & 0 \\ 1 & 2 \end{bmatrix}" inline />:</p>
        <p className="mb-4">Subtract <InlineMath math="\lambda I" inline /> to get:</p>
        <BlockMath math="A - \lambda I = \begin{bmatrix} 3 - \lambda & 0 \\ 1 & 2 - \lambda \end{bmatrix}" />
        <p className="mb-4">The determinant is:</p>
        <BlockMath math="(3 - \lambda)(2 - \lambda) - (0)(1) = 0" />
        <p className="mb-4">Expanding gives:</p>
        <BlockMath math="\lambda^2 - 5\lambda + 6 = 0" />
        <p className="mb-4">Solving this quadratic equation gives eigenvalues <InlineMath math="\lambda = 3" inline /> and <InlineMath math="\lambda = 2" inline />.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">5. <span className=" ">Geometric Interpretation</span></h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>Eigenvectors</strong> show directions that remain invariant under the transformation.</li>
          <li><strong>Eigenvalues</strong> indicate the amount of scaling along these directions.</li>
        </ul>
        <p className="mb-4">Example: For the eigenvalue <InlineMath math="\lambda = 3" inline />, any vector on the x-axis (spanned by eigenvector (1, 0)) is stretched by a factor of 3.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">6. <span className=" ">Why Are They Useful?</span></h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>Simplifying Transformations:</strong> If you use eigenvectors as a basis, the transformation becomes diagonal, simplifying computations.</li>
          <li><strong>Applications:</strong>
            <ul className="list-disc list-inside ml-8">
              <li><strong>Physics:</strong> Identifying principal axes of rotation.</li>
              <li><strong>Machine Learning:</strong> Principal Component Analysis (PCA) uses eigenvectors to reduce dimensionality.</li>
              <li><strong>Differential Equations:</strong> Solving systems of linear equations.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p>
          Eigenvectors and eigenvalues give us deeper insights into linear transformations. They reveal the invariant directions and how transformations act along those directions, making complex operations much more intuitive and efficient.
        </p>
      </section>
    </div>
  );
}

export default ChapterFourteen;
