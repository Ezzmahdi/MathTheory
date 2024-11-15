import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ChapterTen = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-bold mb-6">Chapter 10: <strong>The Cross Product</strong></h1>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">1. <strong>What is the Cross Product?</strong></h3>
      <p className="mb-6">
        Imagine two vectors, <InlineMath math="v" /> and <InlineMath math="w" />, hanging out in 2D or 3D space. These vectors form the sides of a <strong>parallelogram</strong> when placed tail-to-tail. The cross product tells us:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>How much area</strong> that parallelogram covers.</li>
        <li><strong>Which direction</strong> the resulting vector points in 3D space (more on that soon!).</li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">2. <strong>Let’s Start in 2D</strong></h3>

      <h4 className="text-xl font-semibold mb-4">2.1 Visualizing the Parallelogram</h4>
      <p className="mb-6">
        Take two vectors:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><InlineMath math="v = \begin{bmatrix} 3 \\ 1 \end{bmatrix}" /></li>
        <li><InlineMath math="w = \begin{bmatrix} 2 \\ 4 \end{bmatrix}" /></li>
      </ul>
      <p className="mb-6">
        1. Place them so their tails meet.<br />
        2. Draw lines parallel to each vector to form a parallelogram.
      </p>

      <h4 className="text-xl font-semibold mb-4">2.2 Why Care About the Area?</h4>
      <p className="mb-6">
        The <strong>area</strong> of this parallelogram gives us a measure of how “spread out” these vectors are from each other. If they point in the same direction, the area is <strong>zero</strong> (no parallelogram). The more they diverge, the bigger the area.
      </p>

      <h4 className="text-xl font-semibold mb-4">2.3 <strong>Orientation (Direction)</strong> in 2D</h4>
      <p className="mb-6">
        In 2D, cross products also tell us if <InlineMath math="v" /> and <InlineMath math="w" /> twist <strong>clockwise</strong> or <strong>counterclockwise</strong> relative to each other. This is where the <strong>sign</strong> of the cross product matters:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Positive cross product</strong>: Counterclockwise twist.</li>
        <li><strong>Negative cross product</strong>: Clockwise twist.</li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">3. <strong>How Do We Calculate the Cross Product in 2D?</strong></h3>
      <p className="mb-6">
        You’ve heard of determinants before, right? Here’s how they come into play:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Write your vectors as columns in a matrix:
          <BlockMath math="\begin{bmatrix} v_x & w_x \\ v_y & w_y \end{bmatrix}" />
        </li>
        <li>For <InlineMath math="v = \begin{bmatrix} 3 \\ 1 \end{bmatrix}" /> and <InlineMath math="w = \begin{bmatrix} 2 \\ 4 \end{bmatrix}" />, it becomes:
          <BlockMath math="\begin{bmatrix} 3 & 2 \\ 1 & 4 \end{bmatrix}" />
        </li>
        <li>Compute the determinant:
          <BlockMath math="(3)(4) - (2)(1) = 12 - 2 = 10" />
        </li>
      </ul>
      <p className="mb-6">
        Thus, the <strong>area of the parallelogram</strong> is <strong>10</strong>, and because it’s positive, <InlineMath math="v" /> twists <strong>counterclockwise</strong> relative to <InlineMath math="w" />.
      </p>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">4. <strong>Why Stop at 2D? Let’s Jump to 3D!</strong></h3>
      <p className="mb-6">
        3D cross products are where things get truly powerful. Here’s why:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>3D vectors define a plane</strong>.</li>
        <li>The cross product spits out a <strong>vector perpendicular</strong> to that plane.</li>
        <li>The length of that perpendicular vector equals the parallelogram’s area.</li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">5. <strong>Visualizing in 3D</strong></h3>
      <p className="mb-6">
        Think about this: You have two vectors:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><InlineMath math="v" /> points along the <strong>x-axis</strong>.</li>
        <li><InlineMath math="w" /> points along the <strong>y-axis</strong>.</li>
      </ul>
      <p className="mb-6">
        If you place these in 3D space, the cross product <InlineMath math="v \times w" /> points along the <strong>z-axis</strong>. Why? Because it’s the only direction <strong>perpendicular</strong> to both the x and y axes.
      </p>

      <h4 className="text-xl font-semibold mb-4">The Right-Hand Rule</h4>
      <p className="mb-6">
        How do you figure out which way this perpendicular vector points? Use your <strong>right hand</strong>:
      </p>
      <ol className="list-decimal pl-8 mb-6">
        <li>Point your <strong>index finger</strong> in the direction of <InlineMath math="v" />.</li>
        <li>Point your <strong>middle finger</strong> in the direction of <InlineMath math="w" />.</li>
        <li>Your <strong>thumb</strong> will now point in the direction of <InlineMath math="v \times w" />.</li>
      </ol>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">6. <strong>Calculating Cross Products in 3D</strong></h3>
      <p className="mb-6">
        Here’s the real deal: Calculating cross products in 3D uses <strong>determinants</strong> too. But this time, it’s for a 3x3 matrix.
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Set up the matrix like this:
          <BlockMath math="\begin{bmatrix} \hat{\imath} & \hat{\jmath} & \hat{k} \\ v_x & v_y & v_z \\ w_x & w_y & w_z \end{bmatrix}" />
        </li>
        <li>Expand the determinant:
          <BlockMath math="v \times w = \hat{\imath} (v_y w_z - v_z w_y) - \hat{\jmath} (v_x w_z - v_z w_x) + \hat{k} (v_x w_y - v_y w_x)" />
        </li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">7. <strong>Why Do Cross Products Matter?</strong></h3>
      <p className="mb-6">
        Here’s where the cross product shows up in real life:
      </p>
      <h4 className="text-xl font-semibold mb-4">7.1 <strong>Physics: Torque and Force</strong></h4>
      <p className="mb-6">
        <InlineMath math="Torque = r \times F" /> tells us how much a force <InlineMath math="F" /> rotates an object around a point.
      </p>

      <h4 className="text-xl font-semibold mb-4">7.2 <strong>Engineering: Finding Normals</strong></h4>
      <p className="mb-6">
        3D models need surface normals (perpendicular vectors) for lighting and shading effects. Cross products give you those normals.
      </p>

      <h4 className="text-xl font-semibold mb-4">7.3 <strong>Robotics and Control Systems</strong></h4>
      <p className="mb-6">
        Use cross products to determine rotational motions.
      </p>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">8. <strong>Summary of Every Key Detail</strong></h3>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>In 2D</strong>: Cross product measures <strong>area and orientation</strong> of parallelograms.</li>
        <li><strong>In 3D</strong>: It gives you a <strong>perpendicular vector</strong> with length equal to the parallelogram’s area.</li>
        <li><strong>Right-Hand Rule</strong> helps figure out the vector’s direction.</li>
        <li><strong>Real-World Importance</strong>: From physics to 3D graphics, the cross product is a fundamental tool.</li>
      </ul>

      <hr className="my-4" />

      <p className="text-xl font-semibold">
        <strong>Coming up next</strong>: Unlocking the <strong>hidden structure</strong> of cross products—beyond formulas!
      </p>
    </div>
  );
};

export default ChapterTen;
