import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function ChapterTherteen() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">Chapter 13: Basis <span className="">Change</span></h2>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">1. <span className="">Vectors in Different Coordinate Systems</span></h3>
        <p className="mb-4">
          Imagine you’re describing a treasure map. In the traditional way, you might say, "Move 3 steps east and 2 steps north."
          This is like describing a vector in the standard Cartesian coordinate system using <strong>basis vectors</strong>:
        </p>
        <ul className="mb-4 list-disc list-inside ml-4">
          <li><InlineMath math="i = (1, 0)" /> (1 step east)</li>
          <li><InlineMath math="j = (0, 1)" /> (1 step north)</li>
        </ul>
        <p className="mb-4">
          So, the position vector <InlineMath math="\mathbf{v} = (3, 2)" /> can be written as:
        </p>
        <BlockMath math="\mathbf{v} = 3\mathbf{i} + 2\mathbf{j} = 3(1, 0) + 2(0, 1)" />
        <p className="mt-4">
          These basis vectors define how we measure distances and directions in this familiar grid system.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">2. <span className="">What If Someone Uses a Different Coordinate System?</span></h3>
        <p className="mb-4">
          Now imagine Jennifer has her own peculiar way of navigating. Instead of moving east and north, she moves using two new directions:
        </p>
        <ul className="mb-4 list-disc list-inside ml-4">
          <li><InlineMath math="\mathbf{b_1} = (2, 1)" /> (her first basis vector)</li>
          <li><InlineMath math="\mathbf{b_2} = (-1, 1)" /> (her second basis vector)</li>
        </ul>
        <p className="mb-4">
          In Jennifer's system, the same treasure location would be described differently. Instead of saying <BlockMath math="\mathbf{v} = (3, 2)" />, she might use:
        </p>
        <BlockMath math="\mathbf{v} = c_1\mathbf{b_1} + c_2\mathbf{b_2}" />
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">3. <span className="">How Do We Find These New Coordinates?</span></h3>
        <p className="mb-4">
          To find <InlineMath math="c_1" /> and <InlineMath math="c_2" />, we solve:
        </p>
        <BlockMath math="c_1(2, 1) + c_2(-1, 1) = (3, 2)" />
        <p className="mb-4">Expanding gives:</p>
        <BlockMath math="\begin{cases} 2c_1 - c_2 = 3 \\ c_1 + c_2 = 2 \end{cases}" />
        <p className="mb-4">Solving these equations, we get:</p>
        <ul className="mb-4 list-disc list-inside ml-4">
          <li><InlineMath math="c_1 = \frac{5}{3}" /></li>
          <li><InlineMath math="c_2 = \frac{1}{3}" /></li>
        </ul>
        <p>So, in Jennifer’s system:</p>
        <BlockMath math="\mathbf{v} = \left(\frac{5}{3}, \frac{1}{3}\right)" />
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">4. <span className="">Change of Basis Matrix</span></h3>
        <p className="mb-4">To automate this process, we use the <strong>change of basis matrix</strong>:</p>
        <BlockMath math="B = \begin{bmatrix} 2 & -1 \\ 1 & 1 \end{bmatrix}" />
        <p className="mb-4">To convert Jennifer’s coordinates <InlineMath math="\begin{bmatrix} c_1 \\ c_2 \end{bmatrix}" /> to ours:</p>
        <BlockMath math="\mathbf{v} = B \cdot \begin{bmatrix} c_1 \\ c_2 \end{bmatrix}" />
        <p className="mb-4">To go the other way, use the inverse matrix:</p>
        <BlockMath math="B^{-1} = \begin{bmatrix} \frac{1}{3} & -\frac{1}{3} \\ \frac{1}{3} & \frac{2}{3} \end{bmatrix}" />
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">5. <span className="">Transformations: Rotations, Scaling, and More</span></h3>
        <p className="mb-4">
          Changing basis reinterprets <strong>linear transformations</strong>, such as rotations, scaling, and shearing.
        </p>
        <p className="mb-4">For example, multiplying a vector by a matrix can rotate it. Choosing the right basis simplifies describing and computing these transformations.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">6. <span className="">Why Use Different Bases?</span></h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>Simplifying Calculations:</strong> Complex transformations reduce to simple scalings.</li>
          <li><strong>Understanding Geometry:</strong> Physics and engineering problems become intuitive in specific systems.</li>
          <li><strong>Eigenvalues and Eigenvectors:</strong> Special vectors stretch/shrink without rotation.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">7. <span className="">Summary</span></h3>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Standard Basis:</strong> The usual <InlineMath math="\mathbf{i}" /> and <InlineMath math="\mathbf{j}" />.</li>
          <li><strong>Alternative Bases:</strong> Custom coordinate systems with new basis vectors.</li>
          <li><strong>Change of Basis:</strong> Moving between systems using matrices.</li>
          <li><strong>Linear Transformations:</strong> Become intuitive with the right basis.</li>
        </ul>
        <p className="mt-4">Mastering basis changes provides deeper insights into geometry and transformations.</p>
      </section>
    </div>
  );
}

export default ChapterTherteen;
